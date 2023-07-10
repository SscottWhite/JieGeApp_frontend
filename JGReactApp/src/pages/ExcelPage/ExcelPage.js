
import React,{ Component } from "react";
import { connect } from "dva";
import { Upload, message, Button, Icon } from 'antd';

@connect(state => ({ ExcelPage:state.ExcelPage }))
class ExcelPage extends Component{
    
    render(){
        const props = {
            name: 'file',
            action: 'http://localhost:8080/excel/import',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };

        return (
            <div>
                <Upload {...props}>
                    <Button>
                    <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        )
    }
}

export default ExcelPage;