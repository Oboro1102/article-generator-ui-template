import { instance } from '../https'

const ARTICLE = {
  POST_REFER_CONTENT_LIST: (
    data: { keyword: string },
    { ...config }
  ) => instance.post('/keyword_search/', data, { ...config }),
  GET_HOT_TREND: () => instance.get('/hot_trend/'),
  GET_TONE_STYLE: () => instance.get('/get_style/'),
  POST_GENERATE_CONTENT: (
    data: {
      generateTextSource: string
      toneStyle: string[]
      maxLength: number
    },
    { ...config }
  ) => instance.post('/write_article/', data, { ...config })
}

export default ARTICLE
