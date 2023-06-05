"use client";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

import { StyledEdit } from "./Edit.style";
import { addData } from "../../../firebase/addData";
import { getData } from "../../../firebase/getData";

const Edit = () => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productType, setProductType] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
      console.log(file.preview, "oie");
    }
    setPreviewImage(file.url || file.preview);
    const byteCharacters = atob(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const handleSubmit = () => {
    const data = {
      nome: productName,
      preço: parseInt(productPrice),
      tipo: productType,
      categoria: productCategory,
      imagens: fileList,
      descrição: productDescription,
    };
    console.log(fileList);
    addData("produtos", "dNHwzbQrCuTzsAejCcGF", data);
  };

  const handleCancelar = async () => {
    const teste = await getData("produtos", "dNHwzbQrCuTzsAejCcGF");
    console.log(teste);
  };

  return (
    <StyledEdit>
      <Card className="edit">
        <p>Detalhes do produto</p>
        <form>
          <div className="flex">
            <TextField
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              name="nomeProduto"
              id="nomeProduto"
              label="Nome do produto"
              variant="outlined"
              className="input"
            ></TextField>
            <FormControl className="input">
              <InputLabel id="demo-simple-select-helper-label">
                Categoria
              </InputLabel>

              <Select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <MenuItem value="vestido">Vestido</MenuItem>
                <MenuItem value="biquini">Biquíni</MenuItem>
                <MenuItem value="calça">Calça</MenuItem>
                <MenuItem value="blusa">Blusa</MenuItem>
                <MenuItem value="top">Top</MenuItem>
                <MenuItem value="casaco">Casaco</MenuItem>
                <MenuItem value="sapato">Sapato</MenuItem>
                <MenuItem value="bolsa">Bolsa</MenuItem>
                <MenuItem value="outro">Outro</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex">
            <TextField
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              name="preco"
              id="preco"
              label="Preço"
              variant="outlined"
              className="input"
            ></TextField>
            <FormControl className="input">
              <InputLabel id="demo-simple-select-helper-label">Tipo</InputLabel>

              <Select
                label="Nome do produto"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <MenuItem value="venda">Venda</MenuItem>
                <MenuItem value="aluguel">Aluguel</MenuItem>
                <MenuItem value="none">Não especificado</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex">
            <TextField
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              id="outlined-multiline-static"
              label="Descrição do produto"
              fullWidth
              multiline
              rows={3}
            />
          </div>
          <p>Imagens</p>

          <div className="flex">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </div>

          <div>
            <Button
              variant="contained"
              className="cancel"
              onClick={handleCancelar}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              className="save"
              //   type="submit"
              onClick={handleSubmit}
            >
              Salvar
            </Button>
          </div>
        </form>
      </Card>
    </StyledEdit>
  );
};

export { Edit };
