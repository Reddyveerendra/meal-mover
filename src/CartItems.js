import { imgPrefix } from "./Config";
import CircleSquareIconRed from "./CircleSquareIcon";
import { CircleSquareIconGreen } from "./CircleSquareIcon";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/CartSlice";
export const CartItem = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const handleRemove = (item) => {
        console.log("hi")
        dispatch(removeItem(item));
    }
    return (
        <div>
            <div className="item" key={item.id}>
                <div
                    className="flex items-center justify-between"
                    style={{
                        margin: "0% 20%",
                        padding: "5%",
                    }}
                >
                    <div className="left_item" style={{ whiteSpace: "pre-wrap" }}>
                        {item.itemAttribute?.vegClassifier === "VEG" ? (
                            <CircleSquareIconGreen />
                        ) : (
                            <CircleSquareIconRed />
                        )}
                        <div className="itemName">{item.name}</div>
                        <div className="price">₹ {item.price / 100}</div>
                        <div
                            className="description"
                            style={{ fontSize: "small", fontWeight: "100" }}
                        >
                            {item.description}
                        </div>
                    </div>
                    <div className="rightItem" style={{ marginLeft: "10%" }}>
                        {item.imageId ? (
                            <>
                                <img
                                    src={imgPrefix + item?.imageId}
                                    alt={item?.imageId}
                                    className="h-[71px] w-[84px]"
                                />
                            </>
                        ) : (
                            ""
                        )}
                        <button
                            type="button"
                            onClick={() => {
                                handleRemove(item);
                            }}
                            className="bg-red-500 rounded-lg p-[4px] mx-[20px]"
                        >
                            {props.count}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}