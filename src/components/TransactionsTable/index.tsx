import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TrasactionsTable(){
useEffect(() => {
  api.get('transactions')
  .then(response => console.log(response.data))
    }, []);
    return(
       <Container>
           <table>
               <thead>
                   <tr>
                       <th>Titulo</th>
                       <th>Valor</th>
                       <th>Categoria</th>
                       <th>Data</th>
                   </tr>
               </thead>

               <tbody>
                   <tr>
                       <td>
                           Desenvolvimento de website
                       </td>
                       <td className="deposit">
                           R$ 12.0000
                       </td>
                       <td>
                           Desenvolvimento
                       </td>
                       <td>
                           20/02/201
                       </td>
                   </tr>
                   <tr>
                       <td>
                           Aluguel
                       </td>
                       <td className="withdraw">
                           -R$ 1200
                       </td>
                       <td>
                           Casa
                       </td>
                       <td>
                           21/02/201
                       </td>
                   </tr>
                   
               </tbody>
           </table>
       </Container>
    )

}