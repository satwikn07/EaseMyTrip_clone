import React from 'react'
import styles from "../../style/searchBox.module.css"
import { useHistory } from 'react-router';

const SearchBox = () => {
    const history = useHistory();


    const nextPage = () =>{
          history.push("/buslist")
    }
    return (
        <div>
            <div className={styles.searchBoxMainDiv} >
                <div className={styles.serach_heading}>
                    <img src="https://i.ibb.co/YQy1MCs/icons8-train-50.png" alt="" />
                    <span>Online Bus Tickets</span></div>
                <div className={styles.serachBox}>
                    <input placeholder="Source City" type="text" />

                    <div className={styles.dummyDiv1}>
                        <div className={styles.line1}></div>
                        <div className={styles.exchange}><i style={{ color: "grey", width: '15px' }} class="fa fa-exchange" aria-hidden="true"></i></div>
                        <div className={styles.line1}></div>
                    </div>
                    <input placeholder="Destination city" type="text" />
                    <div className={styles.dummyDiv2}></div>
                    <input className={styles.date} type="date" />
                    <button><i class="fa fa-search" aria-hidden="true"></i>&nbsp;SEARCH BUS</button>
                </div>
            </div>
            <div className={styles.externalPage}>
                <img onClick={nextPage} src="https://www.easemytrip.com/images/bus-img/guidelines-for-bus-travel.png" alt="" />
            </div>
        </div>
    )
}

export default SearchBox


