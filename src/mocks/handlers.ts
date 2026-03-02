import { http, HttpResponse } from 'msw'
import { users, articles, trendKeywords, tone, demoGenerate } from '@/mocks/database.ts'

export const handlers = [
    http.post('/api/users', async ({ request }) => {
        const data = await request.json()
        const { account, password } = data as { account: string; password: string }
        const target = users.filter((item: { account: string }) => item.account === account)[0]
        if (target) {
            return HttpResponse.json(
                { message: '此帳號已註冊' },
                { status: 400 }
            )
        } else {
            const id = crypto.randomUUID()
            users.push({
                id,
                account,
                password,
            })
            return HttpResponse.json({
                success: true,
                message: '登入成功',
                data: { id, name: '' }
            }, { status: 200 })
        }
    }),
    http.post('/api/users/updatePassword', async ({ request }) => {
        const data = await request.json()
        const { id, password } = data as { id: string, password: string }
        const target = users.filter((item: { id: string }) => item.id === id)[0]
        if (target) {
            target.password = password
            return HttpResponse.json({
                success: true,
                message: '更新成功',
            }, { status: 200 })
        } else {
            return HttpResponse.json(
                { message: '使用者金鑰錯誤' },
                { status: 401 }
            )
        }
    }),
    http.post('/api/auth/login', async ({ request }) => {
        const data = await request.json()
        const { account, password } = data as { account: string; password: string }
        const target = users.filter((item: { account: string }) => item.account === account)[0]
        if (target && target.password === password) {
            const { id } = target
            return HttpResponse.json({
                success: true,
                message: '登入成功',
                data: { id }
            }, { status: 200 })
        } else {
            return HttpResponse.json(
                { message: '查無使用者，請確認帳號密碼是否正確，或新註冊會員' },
                { status: 404 }
            )
        }
    }),
    http.get('/api/hot_trend', () => {
        return HttpResponse.json({
            success: true,
            message: '列表取得成功',
            data: { trendKeywords }
        }, { status: 200 })
    }),
    http.get('/api/get_style', () => {
        return HttpResponse.json({
            success: true,
            message: '列表取得成功',
            data: { tone }
        }, { status: 200 })
    }),
    http.post('/api/keyword_search', async ({ request }) => {
        const data = await request.json()
        const { keyword } = data as { keyword: string; }
        const target = articles.filter(item =>
            item.title.includes(keyword) || item.content.includes(keyword)
        );
        if (target) {
            return HttpResponse.json({
                success: true,
                message: '搜索成功',
                data: { articles: target }
            }, { status: 200 })
        } else {
            return HttpResponse.json(
                { message: '查無相關文章' },
                { status: 404 }
            )
        }
    }),
    http.post('/api/write_article', async ({ request }) => {
        const data = await request.json()
        const { generateTextSource, toneStyle, maxLength } = data as { generateTextSource: string; toneStyle: string[]; maxLength: number }
        return HttpResponse.json({
            success: true,
            message: '生成成功',
            data: { article: demoGenerate }
        }, { status: 200 })
    }),
]