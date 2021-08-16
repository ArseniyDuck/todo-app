import React from "react";


// CheckMark ---------------------------------
type CheckMarkPropsType = {
   height: string
}

export const CheckMarkSvg: React.FC<CheckMarkPropsType> = (props) => {
   return (
      <svg style={{height: props.height}} className="chek-mark-svg" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 240.608 240.608">
         <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z"/>
      </svg>
   );
};


// Cross ---------------------------------
type CrossPropsType = {
   color: string
}

export const CrossSvg: React.FC<CrossPropsType> = (props) => {
   return (
      <div className={`cross cross_${props.color}`}></div>
   );
};


// List ---------------------------------
export const ListSvg: React.FC = () => {
   return (
      <svg className="list-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394.667 394.667">
         <path d="M32,37.333c-17.707,0-32,14.293-32,32s14.293,32,32,32s32-14.293,32-32S49.707,37.333,32,37.333z"/>
         <path d="M32,165.333c-17.707,0-32,14.293-32,32s14.293,32,32,32s32-14.293,32-32S49.707,165.333,32,165.333z"/>
         <path d="M32,293.333c-17.813,0-32,14.4-32,32c0,17.6,14.4,32,32,32c17.6,0,32-14.4,32-32C64,307.733,49.813,293.333,32,293.333z"/>
         <rect x="96" y="304" width="298.667" height="42.667"/>
         <rect x="96" y="48" width="298.667" height="42.667"/>
         <rect x="96" y="176" width="298.667" height="42.667"/>
      </svg>
   );
}