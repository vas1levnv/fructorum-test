import {defineStore} from "pinia";

export const useIndexPageStore = defineStore('indexPage', ()=>{
    const meta = ref({})
    const articles = ref([])
    const url = ref('https://devtwit8.ru/api/v1/page/?path=/')
    async function fetchData(){
        const response = await fetch(`${url.value}`)
            .then(response => response.json())
        meta.value = response.meta
        articles.value = response.body[0].data.articles
    }

    return { meta,articles, fetchData }
})