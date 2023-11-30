// import { useEffect } from "react"
import RenderConstructor from "./EmBreve";


export default function RenderPolicyAndAdvocacy()  {

    // const [policyAndAdvocacy, setPolicyAndAdvocacy] = useState<PolicyAndAdvocacy[]>([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/policy_and_advocacies')
    //     .then(res => res.json())
    //     .then(setPolicyAndAdvocacy)
    // }, [])

    // return(
    //     <div>
    //         <h1>Policy and Advocacy</h1>
    //         {policyAndAdvocacy.map(policyAndAdvocacy => (
    //             <PolicyAndAdvocacyCard key={policyAndAdvocacy.id} policyAndAdvocacy={policyAndAdvocacy} />
    //         ))}
    //     </div>
    // )
    return(
        <RenderConstructor/>
    )
}