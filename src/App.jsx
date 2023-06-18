import "./styles.css";

export default function App() {
  return <form className="new-item-form"> 
    <div className="form-row">
      <label htmlFor="item">new item</label>
      <input type="text" id="item" />
    </div>
  </form>
}