import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import styles from "./index.module.css"

const NavButton = ({ price, page, total, setPage }) => {
  return (
    <div
      style={{
        width: "100wh",
        display: "flex",
        justifyContent: "center"
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
          style={page === 0 ? { borderRadius: "20px 20px 20px 20px", width: "120px" } : {}}
          onClick={() => {
            if (page < total) setPage(page + 1)
          }}
        >
          <ArrowRightOutlined style={{ color: "white" }} />
        </button>
      </div>
    </div>
  )
}

export default NavButton