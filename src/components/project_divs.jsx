import React from "react";

export function DivImage (props) {
    return<div class="col-lg-5" >
    {/* <Link class="nav-link" to="/projects/tas_page" > */}
      <img
        class="img-fluid rounded mb-4 mb-lg-0"
        height={props.img_height}
        width={props.img_width}
        src={props.img_src}
        alt={props.img_alt}
      />
    {/* </Link> */}
    </div>;
}
  
export function DivDescription (props) {
return <div class="col-lg-7" align="justify">
    <h2 class="font-weight-normal" >{props.title}</h2>
    <p> {props.description} </p>
    </div>
}

        
    
            