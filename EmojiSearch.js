
import React,{useState} from 'react'
import './EmojiStyles.css'

function EmojiSearch() {
const [searchEmoji,setSearchEmoji]=useState("");
// const emoji =""

const emojiData=[
    {
        id:1,
        symbol:'😂',
            name:'Over Laughing Face'

        },
        {
            id: 2,
            symbol: '😊',
            name: 'Blushing Face'
        },
        {
            id: 3,
            symbol:'😍' ,
            name:'Loving Face'
        },
        {
            id: 4,
            symbol:'😁' ,
            name:'happy Face'
        },
        {
            id: 5,
            symbol:'😅' ,
            name:'akward Face'
        },
        {
            id: 6,
            symbol: '😑',
            name:'dumb face'
        },
        {
            id: 7,
            symbol: '☹️',
            name:'sad face'
        },
        {
            id: 8,
            symbol: '😡',
            name:'angry'
        },
        {
            id: 9,
            symbol: '🤬',
            name:'very angry'
        },
        {
            id: 10,
            symbol: '😨',
            name:'surprise'
        },
        {
            id: 11,
            symbol: '😒',
            name:'judgemental face'
        },
        {
            id: 12,
            symbol: '🥺',
            name:'cry face'
        },
        {
            id: 13,
            symbol: '😎',
            name:'cool face'
        },
        {
            id: 14,
            symbol: '😱',
            name:'very surprised'
        },
        {
            id: 15,
            symbol: '😶‍🌫️',
            name:'mabbu face'
        },
        {
            id: 16,
            symbol: '😞',
            name:'very sad face'
        },
        {
            id: 17,
            symbol: '🤪',
            name:'crazy face'
        },


    ];

    const handleChange=(e) =>
      {
          setSearchEmoji(e.target.value);
      }
      
      const showEmoji=emojiData.filter((emoji)=>{
               const emojiName=emoji.name.toLowerCase();
               return(emojiName.includes(searchEmoji.toLowerCase()));
      });
  return (
    <div>
      <h1>React Emoji App!!</h1>
      <input type='text' placeholder='Search an emoji..' value={searchEmoji} onChange={handleChange}></input>
      <div>{showEmoji.map((emojis) => emojis.symbol)}</div>
    </div>
  )
}

export default EmojiSearch
