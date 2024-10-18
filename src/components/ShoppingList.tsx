
const ShoppingList: React.FC<{ id: string, label: string, checked: boolean, onChange: (id: string) => void }> = ({ id, label, onChange, checked }) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id={id}
                name={id}
                checked={checked}
                onChange={() => onChange(id)}
                className={`
                    peer relative h-4 w-4 outline-none border-none grid items-center m-0 mr-4 cursor-pointer appearance-none
                    before:content-[""] before:absolute before:h-[2px] before:top-auto before:bg-[#4f29f0] before:rounded-sm before:w-0 before:right-[60%] before:origin-[right_bottom]
                    after:content-[""] after:absolute after:h-[2px] after:top-auto after:bg-[#4f29f0] after:rounded-sm after:w-0 after:left-[40%] after:origin-[left]
                    checked:text-[#c3c8de] checked:animate-move checked:before:animate-check01 checked:after:animate-check02`} />
            <label
                htmlFor={id}
                className={`text-[#414856] relative select-none cursor-pointer grid items-center w-fit transition-all ease-in duration-300 s mr-5  animate-move
                    before:content-[""] before:absolute before:h-[2px] before:w-2 before:-left-7 before:bg-[#4f29f0] before:rounded-sm before:transition-all before:ease-in before:duration-300 
                    after:content-[""] after:absolute after:h-1 after:w-1 after:top-2 after:-left-6 rounded-full
                    peer-checked:text-[#c3c8de] peer-checked:before:bg-[#c3c8de] peer-checked:before:animate-slice
                    peer-checked:after:animate-firework`}>
                {label}
            </label>
        </div>
    );
};

export default ShoppingList;