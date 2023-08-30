import {defineStore} from "pinia";

export const useArticlesPageStore = defineStore('articlesPage', ()=>{
    const metaArticles = ref({})
    const bodyArticles = ref([])
    const url = ref('https://devtwit8.ru/api/v1/page/?path=/')
    async function fetchArticles(id){
        try {
            const response = await fetch(`${url.value}${id}`)
                .then(response => response.json())
            metaArticles.value = response.meta
            bodyArticles.value = response.body
        }catch (e){
            console.log(e)
        }

    }

    return {metaArticles, bodyArticles, fetchArticles }
})