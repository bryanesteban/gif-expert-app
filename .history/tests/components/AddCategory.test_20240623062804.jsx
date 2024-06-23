import { fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        


        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value : 'Saitama' } }) ;

        expect( input.value ).toBe('Saitama');

     });



     test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama'; //declara una variable
        const onNewCategory = jest.fn(); //simula una funcion

        render( <AddCategory onNewCategory={ onNewCategory }/> );  //rendiriza el componente

        const input = screen.getByRole('textbox'); //toma el input como obejeto
        const form = screen.getByRole('form');  //toma el form como objeto

        fireEvent.input( input, { target: { value : inputValue } }) ; //dispara el input
        fireEvent.submit( form );   //dispara el objeto
        
        expect( input.value ).toBe(''); 
        
        expect( onNewCategory ).toHaveBeenCalled(); // prueba que se llame la funcion
        expect( onNewCategory ).toHaveBeenCalledTimes( 2 ); //prueba que se llame la funcion 2 veces
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //prueba que la funcion sea llamada con el valor de saitama


     });

 })