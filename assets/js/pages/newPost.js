import React from "react";

export default class newPostPage extends React.Component{
     let optArray = [];
     addOptSect(data){
		optArray.push({
		    	class	: data.class,
		        bg		: data.bg,
		        txt		: data.txt
        });
     }

     render() {
        return (
            <div className = "newPostPageWrapper" >
                <div id="preview"></div>  ////put prewiew before saving
                <form>
                    <p>Title</p><p id="colorPicker"> </p>
                    <ColorPicker />
                    <input type="text" name="title"><br>
                    Background Picture:<br>
                    <input type="text" name="title"><br>
                    <textarea name="mainTxt"></textarea>
                    <input type="submit" value="add Block">
                    
                    <input type="submit" value="Preview">
                    <input type="submit" value="Save Post">
                </form>  
            </div>
        );
    }
}