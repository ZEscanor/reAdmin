import { Text } from '@/components/text'
import { PlusOutlined } from '@ant-design/icons'
import { useDroppable } from '@dnd-kit/core'
import { Badge, Button, Space } from 'antd'
import React from 'react'

const KanbanColumn = () => {

   const {isOver, setNodeRef, active} = useDroppable({
    id: '',
    data: ''
   })

   const count = 2
    const description = "Description"
    const title = 'Title'
   const onAddClick = () => {
     return 
   }

  return (
    <div 
    ref={setNodeRef}
    style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 16px'
    }}
    
    >
        <div  style={{padding: '12px'}}>
         <Space style={{width: '100%', justifyContent: 'space-between'}}>
          <Space>
            <Text ellipsis={{tooltip: "TITLE TO DO"}}
            size='xs'
            strong
            style={{
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
            }}
            >
                {title}
            </Text>
            {!!count && <Badge
               count={count}
            />}
          </Space>
          <Button 
          shape='circle'
          icon={<PlusOutlined/>}  
          onClick={onAddClick}
          />
         </Space>
         {description}
        </div>
   <div style= {{
    flex: 1,
    overflowY: active ? 'unset' : 'scroll'
   }}>

   </div>

    </div>
  )
}

export default KanbanColumn