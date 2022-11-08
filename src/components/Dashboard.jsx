import { TopMenu, LeftMenu } from './'

const Dashboard = () => {
  return (
    <div>
      <TopMenu />
      <div style={{ display: 'flex', height: '90vh'}}>
        <LeftMenu />
      </div>
    </div>
  )
}

export default Dashboard