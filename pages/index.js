import Head from 'next/head'
import GalleryComponent from '../components/GalleryComponent'
import VideoJS from '../components/VideoJs'


export default function Home() {
  return (
    <div>
      <Head>
        <title>POP piknik</title>
        <meta name="description" content="POP piknik" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="robots" content="noindex" />
      </Head>

      <div className='min-h-screen flex flex-col items-center justify-center md:justify-between'>
        <header className="flex items-center justify-center pt-0 pb-18 mt-32 px-32 bg-white">
          <img src="/img/logo.png" className='w-56' />
        </header>
        <main className="container flex flex-col items-center relative z-20 px-4 mb-6">
          <VideoJS
            videoUrl="https://vod.api.24ur.si/video/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwb3AiLCJjb250ZXh0Ijp7ImFjY2Vzc0J5IjoiIiwiYmFja2VuZCI6MSwiZGV2aWNlRmFtaWx5IjoiIiwiZGV2aWNlSWQiOiIiLCJkcm1Qcm90ZWN0ZWQiOjAsImVuZENodW5rIjowLCJpc0xvY2FsQ2l0aXplbiI6ZmFsc2UsIm1lZGlhRmlsZW5hbWUiOiIiLCJtZWRpYUdlb2xvY2siOiIiLCJtZWRpYVB1Ymxpc2hlZEZyb20iOjAsIm1lZGlhUHVibGlzaGVkVG8iOjAsInByb2ZpbGVJZCI6MCwic2VjdGlvbklkIjowLCJzaXRlSWQiOjAsInNraXBHZW8iOjAsInN0YXJ0Q2h1bmsiOjAsInZpcCI6ZmFsc2UsInZpc2l0b3JJZCI6MCwidmlzaXRvcklwIjoiIn0sImV4cCI6MTY2NDk4MDQwNiwiaWF0IjoxNjYzMDc1NjA2LCJpc3MiOiJwb3AifQ.XzMcU_CQAuZvQAfo5MGa_miSLEDTRKHQ7MxUuGVbj1M/1663071120/88cc269303_62824012/index.m3u8"
            posterUrl="/img/poster.jpg" />
          <GalleryComponent number={222} />
        </main>
      </div>
    </div>
  )
}
