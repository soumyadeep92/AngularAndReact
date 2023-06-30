import React,{useState} from 'react';
import people from './data';
import {FaQuoteRight,FaChevronLeft,FaChevronRight} from 'react-icons/fa';
const Review=()=>{
    const [index,setIndex]=useState(0);
    const checkNumber=(number)=>{
        if(number<0)
        {
            return people.length-1;
        }
        if(number>people.length-1)
        {
            return 0;
        }
        return number;
    }
    const nextPerson=()=>{
        setIndex((index)=>{
            let newindex=index+1;
            return checkNumber(newindex);
        });
    }
    const prevPerson=()=>{
        setIndex((index)=>{
            let newindex=index-1;
            return checkNumber(newindex);
        });
    }
    const randomPerson=()=>{
        let ind=Math.floor(Math.random()*people.length);
        if(ind===index)
        {
            ind=index+1;
        }
        setIndex(checkNumber(ind));
    }
    console.log(people);
    const {name,job,image,text}=people[index];
    return(
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
                <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
                <button className='random-btn' onClick={randomPerson}>surprise me</button>
            </div>
        </article>
    )
}
export default Review;