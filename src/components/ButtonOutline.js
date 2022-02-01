import '../index.css'

const ButtonOutline = () => {
    return (
        <button className="flex stroke-light fill-transparent hover:stroke-primaryDark hover:fill-primaryDark gap-x-2 items-center uppercase btn-outline-light__small lg:btn-outline-light__large mt-7">
            <svg className="w-5 lg:w-6" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 16V4M4.5 16V17C4.5 17.7956 4.81607 18.5587 5.37868 19.1213C5.94129 19.6839 6.70435 20 7.5 20H17.5C18.2956 20 19.0587 19.6839 19.6213 19.1213C20.1839 18.5587 20.5 17.7956 20.5 17V16H4.5ZM16.5 12L12.5 16L16.5 12ZM12.5 16L8.5 12L12.5 16Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Download Cv
        </button>
    )
}

export default ButtonOutline;
