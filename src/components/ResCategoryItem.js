import ResCategoryItemList from "./ResCategoryItemList";

const ResCategoryItem = ({data,showItems,setShowIndex})=>{
    const handleClick = () =>{
        //i Want some how to change state of state varible parent which index is clicked set that as true so that we show that item in the ui
        setShowIndex();
    }

    // console.log(data);
    return <div>
        {/* accordiaans header ( acordian's items) */}
        <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4 " onClick={handleClick} >
            <div className="flex justify-between cursor-pointer " >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length })</span>
                <span >⬇️</span>
            </div>
        {/* Accordian body */}
        {showItems && <ResCategoryItemList items={data.itemCards} /> }

        </div>
    </div>
          
}

export default ResCategoryItem;