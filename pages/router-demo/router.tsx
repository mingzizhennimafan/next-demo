import { useRouter } from "next/router"
import styled from "styled-components"

import Page from "@/components/Page"
import Button from "@/components/Button";
import React from "react";

const RouterList = styled.div`
    
`;

const initDatabase = async () => {
    console.log(111)

  }
  
  const sleep = async (time = 0): Promise<void> => {
    await new Promise((resolve) => {
      setTimeout(function () {
        resolve(null)
      }, time)
    })
  }
  
  const retry = async () => {
    let retryTimes = 5
    let initDatabaseSuccess = false

    // 重试连接
    while (retryTimes > 0 && !initDatabaseSuccess) {
      try {
        await initDatabase()
        initDatabaseSuccess = true
      } catch (error) {
        console.log(error)
        // 3s 后重试
        await sleep(3000)
        console.log("Try to reconnect!")
        retryTimes -= 1
      }
    }
  }

const Router = () => {
    const router = useRouter()
    const handleClick = (id: string) => {
        retry()
    }
    
    return (
        <Page>
            <h1>Router page</h1>
            <div className="intro">静态生成，Static Generation (Recommended): HTML 在构建时生成，并将在每个请求中重用</div>
            <br />
            <RouterList>
                <div className="item">
                    <Button onClick={() => handleClick('dynamic')}>dynamic router apple</Button>
                </div>
            </RouterList>
        </Page>
    )
}

export default Router
