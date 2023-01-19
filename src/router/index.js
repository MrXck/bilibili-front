import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index')
  },
  {
    path: '/space/:id',
    name: 'space',
    component: () => import('../views/UserDetail'),
    children: [
      {
        path: '',
        name: 'User',
        component: () => import('../views/User')
      },
      {
        path: 'dynamic',
        name: 'UserDynamic',
        component: () => import('../views/UserDynamic')
      },
      {
        path: 'video',
        name: 'UserVideo',
        component: () => import('../views/UserVideo')
      },
      {
        path: 'fans',
        name: 'Fan',
        component: () => import('../views/Fan'),
        children: [
          {
            path: 'follow',
            name: 'Follow',
            component: () => import('../views/Follow')
          },
          {
            path: 'fans',
            name: 'Fans',
            component: () => import('../views/Fans')
          },
        ]
      },
      {
        path: 'favlist',
        name: 'FavList',
        component: () => import('../views/FavList'),
      },
    ]
  },
  {
    path: '/dynamic',
    name: 'DynamicPage',
    component: () => import('../views/DynamicPage')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '/message',
    name: 'Message',
    redirect: '/message/reply',
    component: () => import('../views/MessagePage'),
    children: [
      {
        path: 'reply',
        name: 'Reply',
        component: () => import('../views/MessageReply')
      },
      {
        path: 'love',
        name: 'Love',
        component: () => import('../views/ReceiveStar')
      },
      {
        path: 'system',
        name: 'System',
        component: () => import('../views/SystemNotice')
      },
      {
        path: 'whisper',
        name: 'Whisper',
        component: () => import('../views/MyMessage'),
        children: [
          {
            path: ':id',
            name: 'ChatWindow',
            component: () => import('../views/ChatWindow')
          },
        ]
      },
    ]
  },
  {
    path: '/history',
    name: 'HistoryPage',
    component: () => import('../views/HistoryPage')
  },
  {
    path: '/video/:id',
    name: 'VideoPage',
    component: () => import('../views/VideoPage')
  },
  {
    path: '/upload',
    name: 'UploadPage',
    redirect: '/upload/video',
    component: () => import('../views/UploadPage'),
    children: [
      {
        path: 'video',
        name: 'UploadVideo',
        component: () => import('../views/UploadVideo')
      },
      {
        path: 'text',
        name: 'UploadText',
        component: () => import('../views/UploadText')
      }
    ]
  },
  {
    path: '/read/:id',
    name: 'ReadPage',
    component: () => import('../views/ReadPage')
  },
  {
    path: '/dynamicDetail/:id',
    name: 'DynamicDetailPage',
    component: () => import('../views/DynamicDetailPage')
  },
  {
    path: '/watchLater',
    name: 'WatchLaterPage',
    component: () => import('../views/WatchLaterPage')
  },
  {
    path: '/platform',
    name: 'PlatformPage',
    redirect: '/platform/home',
    component: () => import('../views/PlatformPage'),
    children: [
      {
        path: 'home',
        name: 'PlatformHome',
        component: () => import('../views/PlatformHome')
      },
      {
        path: 'dataCenter',
        name: 'PlatformData',
        redirect: '/platform/dataCenter/video',
        component: () => import('../views/PlatformData'),
        children: [
          {
            path: 'video',
            name: 'VideoData',
            component: () => import('../views/VideoData')
          },
          {
            path: 'play',
            name: 'PlayData',
            component: () => import('../views/PlayData')
          },
          {
            path: 'audience',
            name: 'AudienceData',
            component: () => import('../views/AudienceData')
          },
          {
            path: 'read',
            name: 'ReadData',
            component: () => import('../views/ReadData')
          },
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
