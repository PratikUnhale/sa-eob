import { useState } from "react";
import Navbar from "../../components/blocks/Navbar/Navbar";
import ProfileFLoater from "../../components/blocks/ProfileFloater/ProfileFloater";
import SideBar from "../../components/blocks/Sidebar/Sidebar";
import SideFloater from "../../components/blocks/SideFloater/SideFloater";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";
import SearchBar from "../../components/ui/SearchBar/SearchBar";
import style from './ClerkDash.module.scss'
import { offers } from './_test_/TestData'

const ClerkDash = () => {
    let [PToggleState, setPToggleState] = useState(false);

    const toggleProfileFloater = () => {
        PToggleState = !PToggleState
        setPToggleState(PToggleState);
    }

    let [FilterToggleState, setFilterToggleState] = useState(false);

    const toggleFilterFloater = () => {
        FilterToggleState = !FilterToggleState
        setFilterToggleState(FilterToggleState);
    }

    let [CreateToggleState, setCreateToggleState] = useState(false);

    const toggleCreateFloater = () => {
        CreateToggleState = !CreateToggleState
        setCreateToggleState(CreateToggleState);
    }

    const offerCards = () => {
        return offers.map((o) => <Card
            content={
                <div>
                    <div>Order: #{o.orderNo}</div>
                    <div>Client: {o.clientName}</div>
                    <div>Status: {o.orderStatus}</div>
                </div>
            }
        />);
    }

    return (
        <div className={style['clerk-dash']}>
            <Navbar
                profileToggleCallback={toggleProfileFloater}
            />
            <ProfileFLoater show={PToggleState} />
            <div className={style['dash-container']}>
                <SideBar
                    items={['Offers', 'Clients']}
                />
                <div className={style['dash-body']}>
                    <SideFloater show={FilterToggleState} content={'filter'} toggle={toggleFilterFloater} />
                    <SideFloater show={CreateToggleState} content={'create'} toggle={toggleCreateFloater} />
                    <div className={style.padded}>
                        <div className={style.actions}>
                            <SearchBar />
                            <Button name="filter" onClick={toggleFilterFloater} type="basic" />
                            <Button name="+ create" onClick={toggleCreateFloater} type="accent" />
                        </div>
                        {offerCards()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClerkDash;
