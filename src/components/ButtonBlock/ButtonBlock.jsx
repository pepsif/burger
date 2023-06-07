import './ButtonBlock.scss';

export default function ButtonBlock() {
    return(
        <>
            <div className="button_block">
        <button className="customize">Редагувати</button>
        <button className="add">
          Додати до кошика
          <span className="add_button_cost">₴00.00</span>
        </button>
      </div>
        </>
    )
}