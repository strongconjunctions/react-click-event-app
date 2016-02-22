import React from 'react';
import ReactDOM from 'react-dom';

class ChildComp1 extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="prompt">
          <h3>Turn the frown upside down!</h3>
        </div>
        <button type="button" onClick={this.props.smiles} className="button"><span id="button" class="lnr lnr-sad"></span></button>

      </div>
    );
  }
}



class ChildComp2 extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div><p id="innerText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit earum totam, consectetur sapiente quasi, recusandae deleniti sed vero voluptatibus, doloribus temporibus veniam, est laudantium harum perspiciatis voluptate placeat itaque molestiae voluptatem inventore ipsa dolores optio quis. Perferendis, vero, quis.</p></div>
      </div>
    );
  }
}

class ParentComponent extends React.Component {

  smileMore() {
/*    var txt = document.getElementById('innerText').innerHTML = "";
    var el = document.createElement('h2');
    var newContent = document.createTextNode("Hi there and greetings!"); 
    el.appendChild(newContent);
    txt = txt.appendChild(el);*/

    // Turning that Frown upside Down
    var smile = document.createElement("span");
    smile.className = ("lnr lnr-smile");
    var sad = document.getElementById("button");
    var parentDiv = sad.parentNode;
    parentDiv.replaceChild(smile, sad);

    // Changing the Text Node
    var newTxt = document.createElement("h2");
    newTxt.className = ("newTxt");
    var txtNode = document.createTextNode("A SMILE A DAY KEEPS MORTICIAN AWAY");
    newTxt.appendChild(txtNode);
    var oldTxt = document.getElementById("innerText");
    var parentDiv2 = oldTxt.parentNode;
    parentDiv2.replaceChild(newTxt, oldTxt);
  }

  render() {
    return (
      <div>
        <ChildComp1 smiles={this.smileMore} />
        <ChildComp2 />
      </div>
    );
  }
}



ReactDOM.render(
  <ParentComponent />,
  document.getElementById('app')
);