import { setShoes, startLoadingShoes } from "./shoesSlices";

export const getShoes = ( page = 0 )=>{
  return async (dispatch, getState) =>{
    dispatch( startLoadingShoes() );

    //TODO realziar petición http

    const resp = await fetch(`https://strapi-production-3f23.up.railway.app/api/shoes?populate=*`)
    const data = await resp.json()
    // console.log(data.data)


    dispatch(setShoes({shoes: data.data, page: page+1}));
  }
}