import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { dataprovider } from './Context'
import Subbu from './Subbu'

export default function Result() {
    const {quantity}=useContext(dataprovider)
    const [datas,setdatas]=useState([])
    console.log(quantity)
    useEffect(()=>{
        axios.post("http://localhost:5000/find",{quantity})
        .then((res)=>setdatas(res.data))
        .catch((e)=>console.log(e))
    },[])
    var count=0
    console.log(datas)
    console.log(count)
    console.log(count)
  return (
   
         <div>
      <Subbu></Subbu>
      <p className='px-5 py-2 font-montserrat text-2xl font-semibold'>Sample id : {quantity}</p>
      <div className='bg-gray-800 top-5 text-white h-[100vh] overflow-y-auto font-monserrat p-3'>
      <table class="table">
  <thead>
    <tr>
    <th scope="col"></th>
      <th scope="col">Arsenic</th>
      <th scope="col">Lead</th>
      <th scope="col">Mercury</th>
      <th scope="col">Benzene</th>
      <th scope="col">Toluene</th>
      <th scope="col">Trichloroethylene</th>
      <th scope="col">Nitrates</th>
      <th scope="col">Percholoroethylene</th>
      <th scope="col">Trichloroethene</th>
      <th scope="col">Radon</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>Safe Value</th>
      <td>10 µg/L</td>
      <td>15 µg/L</td>
      <td>0.1 µg/L</td>
      <td>5 µg/L</td>
      <td>1000 µg/L</td>
      <td>5 µg/L</td>
      <td>10000 µg/L</td>
      <td>5 µg/L</td>
      <td>5 µg/L</td>
      <td>4000 pCi/L</td>
    </tr>
    <tr>
    <th scope='row'>Current Value</th>
    {datas.length!==0 &&(
    <td>{datas[0].arsenic} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].lead} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].mercury} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].benzene} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].toluene} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].trichorolo} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].nitrate} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].percholoro} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].trichorolo} µg/L</td> )
}
{datas.length!==0 &&(
    <td>{datas[0].radon} pCi/L</td> )
}
    
       
    </tr>
   
  </tbody>
</table>
        {
                datas.length===0 &&
                <p>No Data avaliable</p>
        }
        {datas.length!==0 && datas[0].arsenic!==" " &&
         <div className='overflow-y-auto p-5 mb-5'>
        {((parseInt(datas[0].arsenic)+0>=10|| parseInt(datas[0].nitrate)+0>=10000))&&<p className='p-2 mt-6 text-base leading-7 font-montserrat text-white-400 '><sapn className="text-red-500 font-semibold underline">Reverse Osmosis  : </sapn>Certainly, here's a simplified, step-by-step process of reverse osmosis (RO) for treating a large amount of underground water:<p></p>
1.	Water Intake: Underground water is collected and pumped to the treatment facility.<p></p>
2.	Pretreatment:
•	Screening: Large debris like leaves and twigs are removed.
•	Chemical Adjustment: Chemicals may be added to prepare the water for RO.<p></p>
3.	High-Pressure Pumping: The water is pressurized using powerful pumps to push it through the RO system.<p></p>
4.	RO Membranes: The treated water passes through specialized membranes that act like super-fine filters. These membranes allow clean water to pass while blocking contaminants.<p></p>
5.	Clean Water Collection: The purified water, called "permeate," is collected and stored for use. It's now clean and safe for various applications.<p></p>
6.	Concentrate Disposal: The leftover water with concentrated impurities, known as "brine" or "reject," is safely disposed of.<p></p>
7.	Post-Treatment: Depending on the water's final use, additional steps like disinfection or mineral adjustment may be applied.<p></p>
8.	Monitoring and Control: The system is continuously monitored and adjusted to ensure it works correctly.<p></p>
In essence, reverse osmosis filters out impurities from underground water by pushing it through special filters at high pressure. The clean water is collected, while the concentrated impurities are disposed of responsibly. It's a reliable method for providing safe, clean water on a large scale.

</p>}
{((parseInt(datas[0].lead)+0>=10|| parseInt(datas[0].mercury)+0>=0.1))&&<p className='p-2 mt-6 text-base leading-7 font-montserrat text-white-400 '><sapn className="text-red-500 font-semibold underline">Chemical precipitation  : </sapn>Here's a simplified, step-by-step process of chemical precipitation for treating a large amount of underground water:<p></p>
1.	Water Intake: Underground water is collected and pumped to the treatment facility.<p></p>
2.	Preparation:
•	pH Adjustment: The water's pH level is adjusted using chemicals to make it suitable for the precipitation process.
•	Coagulation: Special chemicals called coagulants are added to the water. These chemicals help particles and impurities in the water stick together, forming larger clumps.<p></p>
3.	Mixing: The water is gently mixed to ensure that the coagulants are thoroughly dispersed, allowing them to react with impurities.<p></p>
4.	Settling: The water is allowed to sit in a large tank or basin. During this time, the coagulated impurities settle at the bottom, forming a sludge layer.<p></p>
5.	Clarification: The clarified water, which is now clearer and contains fewer impurities, is carefully drawn from the top of the tank.<p></p>
6.	Sludge Removal: The sludge at the bottom of the tank is periodically removed and disposed of properly.<p></p>
7.	Post-Treatment: Depending on the water's final use, additional steps like disinfection or pH adjustment may be applied.<p></p>
8.	Monitoring and Control: The system is continuously monitored and adjusted to ensure it works correctly.<p></p>
In summary, chemical precipitation involves adding chemicals to underground water to make impurities clump together. After allowing time for settling, the clarified water<p>is separated from the impurities, which are removed as sludge. This process is an effective way to clean and purify a large amount of water for various uses.</p>
</p>}
        {((parseInt(datas[0].benzene)>=5|| parseInt(datas[0].toluene)+0>=1000 || parseInt(datas[0].trichorolo)>=5 || parseInt(datas[0].percholoro)>=5 || parseInt(datas[0].trichorolo)>=5 || parseInt(datas[0].radon)>=4000))&&<p className='p-2 mt-6 text-base leading-7 font-montserrat text-white-400 '><sapn className="text-red-500 font-semibold underline">Granular activated carbon filtration : </sapn>Here's a simplified, step-by-step process of granular activated carbon (GAC) filtration for treating a large amount of underground water:<p></p>
1.	Water Intake: Underground water is collected and pumped to the treatment facility.<p></p>
2.	Preparation:
•	Screening: Large debris like leaves and twigs are removed.
•	pH Adjustment: The water's pH level is adjusted using chemicals to make it suitable for the GAC filtration process.
3.	GAC Bed: The water is then passed through a large bed of granular activated carbon (GAC). GAC is a highly porous material that can adsorb impurities.<p></p>
4.	Adsorption: As the water flows through the GAC bed, the activated carbon adsorbs impurities such as organic chemicals, taste and odor compounds, and some heavy metals. This process effectively removes contaminants from the water.<p></p>
5.	Clean Water Collection: The treated water, now free from many impurities, is collected and stored for use.<p></p>
6.	GAC Regeneration: Over time, the GAC bed can become saturated with adsorbed impurities. The GAC may need to be periodically regenerated or replaced to maintain its effectiveness.<p></p>
7.	Monitoring and Control: The system is continuously monitored and adjusted to ensure it operates correctly.<p></p>
In essence, GAC filtration involves passing underground water through a bed of activated carbon, which acts like a sponge to adsorb impurities. The cleaned water is collected for various uses, and the GAC may need occasional regeneration or replacement. It's an effective way to treat a large volume of water and improve its quality.<p></p>


</p>}
{
        count===0 &&<p>The water is safe for Human Consumpution, Agricultural Purposes and Other Domestic Activities.Hence, no need of any Filteration techniques.</p>
}
       
       
       </div> 
    
    }
      </div>
        
    </div>
  )
}
