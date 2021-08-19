import Head from 'next/head'

import Page from '@/components/Page'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Page className={styles.container}>
      <Head>
        <title>简介</title>
      </Head>
      <div className={styles.inner}>
        <p>
          在 JavaScript 前端库/框架（例如 React、Angular、Svelte 和 Vue.js）出现之前，服务器端渲染一直是渲染 Web 应用程序的流行方式，它们使客户端渲染成为主流。
          下面介绍一下客户端渲染（CSR）与服务端渲染(SSR)
        </p>
        <h1>什么是客户端渲染？</h1>
        <p>客户端渲染（Client-Side Rendering简称CSR）。</p>
        <p>
          客户端渲染是一种在客户端（浏览器）上渲染 Web 应用程序内容的方式。这意味着当用户发出初始请求时，服务器将返回一个空白页面或带有一些脚本的加载中屏幕。
          并且客户端渲染需要用户启用JavaScript 才可以看到页面。
        </p>
        <p>
          在脚本完全加载和编译后，页面呈现。这可能会导致初始渲染时间变慢，但好处是当向服务器发出另一个请求时，只有内容需要从服务器传输到客户端。该脚本将负责呈现响应。
          这反过来使第一个请求之后的所有后续请求都非常快。这种方法的主要缺点是脚本往往会随着应用程序的增长而增长，这可能会降低其扩展时的性能。
        </p>
        <h1>什么是服务器端渲染？</h1>
        <p>服务端渲染（Server-Side Rendering简称SSR）</p>
        <p>SSR 是一种在服务器上呈现 Web 应用程序然后将响应和内容发送回用户的方式。这意味着当用户打开 Web 应用程序时，会向服务器发送请求，
          服务器会返回响应以及向用户显示页面所需的内容，即 HTML、CSS、JavaScript 和其他资源。
        </p>
        <p>
          与客户端呈现的应用程序的方式不同，带有内容的页面会返回给用户。这种方法的缺点是每当用户点击链接时总是向服务器发出请求，
          这可能很慢，因为服务器必须完成处理请求的过程，然后返回 HTML、CSS 和 JavaScript 文件。
        </p>
        <p>
          这种方法的解决方案是 SSR 和 CSR 的混合，这种解决办法称为同构应用程序（Isomorphic app）。在同构应用程序中，
          我们可以通过从服务器渲染初始 HTML，然后让客户端渲染内容来消除客户端渲染应用程序缓慢的初始加载时间，
          从而消除SSR 必须向服务器发出的频繁请求。
        </p>
        <h2>SSR 的好处</h2>
        <ul>
          <li>更快的初始加载时间：因为 SSR仅在发出初始请求时获取用户请求的内容，而且不必等到所有 JavaScript 文件都加载完。 Time To First Byte（即响应时间）更快</li>
          <li>有利于 SEO：SSR 应用程序更有好与搜索引擎（Baidu、Google、Bing 等），因为搜索引擎的机器人可以抓取整个应用程序并将其页面编入索引，而不是仅加载和更新的客户端呈现的单页应用程序。</li>
          <li>非常适合静态网站：因为服务器会向用户返回完整的 HTML，所以 SSR 非常适合构建静态网站。</li>
        </ul>
        <h1>注：</h1>
        <p>TTFB (Time To First Byte)是发出页面请求到接收到应答数据第一个字节的时间总和，它包含了DNS解析时间、 TCP连接时间、发送HTTP请求时间和获得响应消息第一个字节的时间。</p>
      </div>
    </Page>
  )
}
