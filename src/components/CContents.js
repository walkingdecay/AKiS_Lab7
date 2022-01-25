import React, {Component} from 'react';
// import './CContent.css';
import jsonData from '../res/text.json';
import jsonData2 from '../res/text2.json';

class CContents extends Component{
    
    constructor(){
        super()
        this.state = { msg : 'Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość' }
        this.txtDate = () => JSON.parse( JSON.stringify( jsonData ));
        this.txtDate2 = () => JSON.parse( JSON.stringify( jsonData2 ));
        const imgContext = require.context('../res/', false, /\.png$/);
        let img = {};
        this.imgs = imgContext.keys().reduce( (icons, file) => {
            const cname = imgContext(file).default;
            const label = file.slice( 2, -4 );
            img[label] = cname;
            return img;
        }, {});
        // this.changeMsg = this.changeMsg.bind( this );
    }

    changeMsg = () => {
        this.setState({ msg : 'Właśnie jesteś uczesthikiem kursu React, gratulacje!'  });
        console.log('Przycisk został naciśnięty');
    }

    
    
    render(){
        // const items = [];
        // for( let i = 0; i < this.txtDate().count; i++ ){
        //     let value = this.txtDate().text[i];
        //     items.push(
        //         <div className="contentsFlex">
        //             <img className="contentsFlexImg" src={this.imgs['img'+(i+1)]} alt=""/>
        //             <p className="contentsFlexTxt">{value}</p>
        //         </div>
        //     );
        // }

        const tabData = this.txtDate2().data;
        const items = tabData.map( ( item, i ) =>(
            <div id={`"div${item.id}"`} className="contentsFlex" key={ Math.random() }>
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt="" key={ Math.random() }/>
                <p className="contentsFlexTxt" key={ Math.random() }> {item.text}</p>
            </div>
        ));

        return(
            <div className="contentsDivClass">
                {items}
                <h1>{ this.state.msg }</h1>
                <button onClick={this.changeMsg}>Kliknij, aby poznać tajemnicę</button>
            </div>
        )
    }
}

export default CContents