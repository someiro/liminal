import { useParams } from "react-router-dom";
import type { ComponentType } from "react";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import Checkbox from "./components/Checkbox";
import Container from "./components/Container";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Radio from "./components/Radio";
import Select from "./components/Select";
import Spacer from "./components/Spacer";
import Switch from "./components/Switch";
import Tabs from "./components/Tabs";
import Text from "./components/Text";
import TextArea from "./components/TextArea";
import TextField from "./components/TextField";
import Upload from "./components/Upload";

const componentPages: Record<string, ComponentType> = {
  Badge,
  Button,
  Card,
  CardContainer,
  Checkbox,
  Container,
  Header,
  Loading,
  Menu,
  Modal,
  Radio,
  Select,
  Spacer,
  Switch,
  Tabs,
  Text,
  TextArea,
  TextField,
  Upload,
};

const ComponentPage = () => {
  const { componentName } = useParams();
  const Page = componentName ? componentPages[componentName] : undefined;

  if (!Page) {
    return <p>コンポーネントの説明が見つかりません。</p>;
  }

  return <Page />;
};

export default ComponentPage;