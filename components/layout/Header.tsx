import React from "react"
import Link from 'next/link'
import { useRouter } from "next/router"
import styled from "styled-components"

import styles from '../../styles/Header.module.scss'

const HeaderConfig = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/hello-page',
        name: 'Hello Next',
    },
    {
        path: '/router-demo/router',
        name: 'router',
    },
    {
        path: '/page-with-data/static-data',
        name: 'page data',
    },
    {
        path: '/ssr/demo',
        name: 'ssr',
    }
]

const Nav = styled.nav`
    .menu-active {
        position: relative;
    }
    .menu-active::after {
        content: "";
        width: calc(100% - 40px);
        height: 2px;
        background: palevioletred;
        position: absolute;
        bottom: 7px;
        left: 20px;
    }
`

const Header = () => {
    const router = useRouter()
    const pathname = router.pathname

    // Render
    return (
        <header className={styles.header}>
            <style ></style>
            <Nav>
                <ul>
                    {HeaderConfig.map(it => (
                        <li key={it.path} className={pathname === it.path ? 'menu-active' : ''}>
                            <Link href={it.path}>{it.name}</Link>
                        </li>
                    ))}
                </ul>
            </Nav>
        </header>
    )
}

export default Header
