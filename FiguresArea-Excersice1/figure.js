function perimetroCuadrado(lado)
{
   return lado * 4;
}

function areaCuadrado(lado) 
{
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 +lado2 +base;
}

function areaTriangulo(base, altura)
{
    return(base*altura)/2;
}

function diametroCirculo(radio)
{
    return radio*2;
}

function areaCirculo(radio)
{
    return diametroCirculo(radio)* Math.PI;
}


function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadradp");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuandrado()
{
    const input = document.getElementById("InputCuadradp");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}