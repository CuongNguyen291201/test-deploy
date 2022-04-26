import ContainerWeb from '../common/container/Container'
import './style.scss'

const Introduction = () => {
    return (
        <div id="introduction">
            <ContainerWeb>
                <ul className="list-intro">
                    <li className="title-intro">What is CDL?</li>
                    <div className="content-intro">
                        <p>CDL stands for Commercial Driver's License that allows drivers to operate commercial hazardous material vehicles that are large, heavy, or placarded in the U.S. This license is required for certain types of commercial motor vehicles (CMVs). There are typically three classes of CDLs according to federal standards:</p>
                        <ul>
                            <li>Class A (Combination vehicles): the condition of this class is a gross combination weight rating of more than 26,001 pounds for the whole combination of vehicles, in which each type of vehicle has a gross vehicle weight rating of no less than 10,000 pounds when being towed. (e.g. tractor-trailers)</li>
                            <li>Class B (Heavy straight vehicles): this class requires a single vehicle with a gross vehicle weight rating of at least 26,001 pounds, or a vehicle that tows another less-than-10,000-pound vehicle. (e.g. transit bus, coach bus)</li>
                            <li>Class C (Small vehicles): the requirement for this class is a combination of vehicles or a single vehicle that is not in Class A or Class B. The number of passengers allowed for vehicles in this class is more than 16 including the driver. (e.g. sixteen-passenger van)</li>
                        </ul>
                    </div>
                    <li className="title-intro">What are the requirements to obtain a CDL License in 2022?</li>
                    <div className="content-intro">
                        <p>In order to successfully get a CDL License in 2022, you need to meet the following requirements:</p>
                        <ul>
                            <li>Be at least 18  years old</li>
                            <li>Prepare identity and social security number verification</li>
                            <li>Verify your state and US residency</li>
                            <li>Hand in a CDL Application in your state and pay the fee</li>
                            <li>Hand in a completed Medical Examination Report Form & Medical Examiner's Certificate Form</li>
                            <li>Complete driver training from FMCSA Training Provider Registry (for Class A & Class B CDL)</li>
                            <li>Pass a vision test</li>
                            <li>Pass CDL written knowledge test</li>
                            <li>Pass a pre-trip inspection</li>
                            <li>Pass the road skills and driving test</li>
                            <li>Have a valid driver's license or commercial learner's permit for your state</li>
                        </ul>
                    </div>
                </ul>
            </ContainerWeb>
        </div>
    )
}

export default Introduction