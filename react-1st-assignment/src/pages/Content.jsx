import React from 'react'

const Content = () => {
  return (
    <div className="content">
        <div className="contents">
            <div className="content1">
                <h3>Content- 1</h3>
                <p>Main content area</p>
            </div>
            <div className="card">
                <div className='content2'>
                    <h3>Content-2</h3>
                    <p>Secondary content</p>
                </div>
                <div className='content3'>
                    <h3>Content-3</h3>
                    <p>Tertiary content</p>
                </div>
            </div>
        </div>
        <div className="sidebar">
            <h3>Sidebar</h3>
            <p>Sidebar content area</p>
        </div>
    </div>
  )
}

export default Content
