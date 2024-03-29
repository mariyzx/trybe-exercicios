/* Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada 
filme que possui um número maior de vendas internacionais (international_sales) do que 
vendas nacionais (domestic_sales). 
*/

SELECT m.title, (b.domestic_sales + b.international_sales) AS `Vendas`
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;