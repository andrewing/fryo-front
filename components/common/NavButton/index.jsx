import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import styles from "./index.module.css"

const NavButton = ({ totalFee, page, total, setPage }) => {
  return (
    <div
      style={{
        width: "100wh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <button
          className={`${styles.navButton} ${styles.navLeft}`}
          style={{ display: page === 0 && "none" }}
          onClick={() => {
            if (page > 0) setPage(page - 1)
          }}
        >
          <ArrowLeftOutlined style={{ color: "white" }} />
        </button>
        <button
          className={`${styles.navButton} ${styles.navRight}`}
          style={page === 0 ? { borderRadius: "20px 20px 20px 20px", minWidth: "118px" } : {}}
          onClick={() => {
            if (page < total) setPage(page + 1)
          }}
        >
          <span
            className="raleway-medium"
            style={
              totalFee ?
                {
                  fontSize: "14px",
                  borderRadius: "100px",
                  background: "rgba(0,0,0,0.2)",
                  color: "rgba(255,255,255,0.8)",
                  padding: "4.5px 12px",
                  marginRight: "10px",
                  fontWeight: 400,
                }
                :
                {
                  display: "none"
                }}
          >
            ₱{totalFee?.toFixed(2)}
          </span>
          <ArrowRightOutlined style={{ color: "white" }} />
        </button>
      </div>
    </div>
  )
}

export default NavButton