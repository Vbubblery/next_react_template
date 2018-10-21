import Header from './Header'
import Footer from './Footer'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer copyright={'Bubble'} />
  </div>
)

export default Layout