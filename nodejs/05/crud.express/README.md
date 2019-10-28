# Express - crud

## 起步

- 初始化
- 模板处理

## 路由处理

| 请求方法 | 请求路径 | get 参数 | post 参数 | 备注 |
|---------|----------|---------|-----------|------|
| GET | /students |            |           | 渲染首页 |
| GET | /students/new |        | name、age、gender、hobbies | 渲染添加学生页面 |
| POST | /students/new |           |           | 处理添加学生页面 |
| GET | /students/edit | id |           | 渲染编辑页面 |
| POST | /students/edit |  | id、name、age、gender、hobbies | 处理编辑请求 |
| GET | /students/delete | id |  | 删除指定学生 |

