import { pages } from '../components/pages'
import NavButton from '../components/common/NavButton'

const Home = ({ ...props }) => {
  const {setters, getters} = props
  const {setPage, setOpenSnackbar} = setters
  const {page, totalFee, allInputInPageValid} = getters
  return (
    <div className="main-container">
      {pages(props)[page]?.component}
      <div style={{ position: "fixed", width: "100%", bottom: "30px" }}>
        <NavButton
          totalFee={totalFee}
          page={page}
          setPage={setPage}
          total={pages().length}
          allInputInPageValid={allInputInPageValid}
          setOpenSnackbar={setOpenSnackbar}
        />
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const products = await fetch(`${process.env.BASE_URL}products`).then(r => r.json())
  return {
    props: {
      products
    }
  }
}