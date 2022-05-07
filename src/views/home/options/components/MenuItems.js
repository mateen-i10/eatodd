import React, {useState} from 'react'

const MenuItems = (props) => {

    const [select, SetSelect] = useState(0)

    const handleSelect = ()  => {
       if (select !== 0) {
           SetSelect(0)
    }
}

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className="card mb-3 border-2" style={{maxWidth: 540}}>
                <div className="row g-0" onClick={() => handleSelect()}>
                    <div className="col-md-4">
                        <img src={props.item1} className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.itemTitle1}</h5>
                            <div style={{display:'flex'}}>
                                <p className="card-text" style={{marginRight:50}}>{props.itemPrice1}</p>
                                <p className="card-text" style={{flex:1}}><small className="text-muted">210 cal</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 border-2" style={{maxWidth: 540, marginLeft:60}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.item2} className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.itemTitle2}</h5>
                            <div style={{display:'flex'}}>
                                <p className="card-text" style={{marginRight:50}}>{props.itemPrice1}</p>
                                <p className="card-text" style={{flex:1}}><small className="text-muted">210 cal</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItems