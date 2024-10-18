import ShoppingList from '@/components/ShoppingList';
import { useEffect, useState } from 'react'

const MSIHome = () => {
    const [counter, setCounter] = useState(0)
    const [items, setItems] = useState([
        { id: '1', label: 'Ekmek', defaultChecked: true },
        { id: '2', label: 'Peynir', defaultChecked: false },
        { id: '3', label: 'Kahve', defaultChecked: false },
        { id: '4', label: 'Çikolata', defaultChecked: false },
    ]);

    useEffect(() => {
        if (counter >= 5) return;
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [counter])
    return (
        <div className='flex flex-col space-y-4 mt-4 items-center justify-center w-full h-full'>
            <p className='text-xl text-center'>Beraber yaşadığımız zaman böyle bir alışveriş listesi yapsam hoşuna gider miydi? <br /> İsimlerin üstüne tıklamayı unutma!</p>
            {counter >= 5 ?
                <div className='bg-white rounded-lg relative shadow-lg px-7 py-10 items-center justify-center w-fit space-y-2' id="checklist">
                    <span className='text-xl font-medium text-red-500'>Alışveriş listesi</span>
                    {items.map(item => (
                        <ShoppingList key={item.id} id={item.id} label={item.label} />
                    ))}
                </div> : <h1 className='text-center'>Bitanem, hayatımın anlamı seni çok ama çok seviyorum <span className='text-red-600'>❤</span></h1>}
        </div>
    )
}

export default MSIHome