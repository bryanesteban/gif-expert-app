import { renderHook } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('debe de regresar el estado inicial', () => { 
        
        const { result } = renderHook( () => useFetchGifs('One Punch'));

     })

 })