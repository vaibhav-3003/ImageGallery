import React,{useState} from 'react'

const Search = ({searchText}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e)=>{
    e.prevetDefault();

    searchText(text);
  }
  return (
    <div className="w-3/4">
      <form className='flex' onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Search..."
          className="w-full px-3 py-3 border outline-none shadow-lg rounded-md"
        />
        <button type='submit' className='border px-5 bg-gray-800 text-white shadow-lg rounded-md'>Search</button>
      </form>
    </div>
  );
}

export default Search
