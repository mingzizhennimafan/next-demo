import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
  age: Number
}

type ApiRes<T> = {
  code: number
  data?: T
  success: boolean
  message?: string
}

type User = {
  name: string
  age: number
}

const UserList: User[] = [
  {
    name: "zhangsan",
    age: 18,
  },
  {
    name: "lisi",
    age: 16,
  },
  {
    name: "wangmazi",
    age: 35,
  },
]


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiRes<Data>>
) {
  const { name } = req.query as { name: string }

  const fUser = UserList.find((user) => user.name === name)

  let result: ApiRes<Data> = {
    code: 1,
    success: true,
    data: fUser,
  }

  if (!fUser) {
    result = {
      code: 1,
      success: false,
      message: 'user not exist!'
    }
  }

  res.status(200).json(result)
}
