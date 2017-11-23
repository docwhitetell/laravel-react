const filterList=[
   '/',
   '/login',
    '/blogs',
]
export function routeMiddleware(path) {
   return filterList.filter((item)=>{return item===path}).length
}