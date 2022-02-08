import React, { useState } from "react";
import { Pagination, Button, Rate, Input } from "antd";
import {
  SendOutlined,
  AccountBookOutlined,
  DeliveredProcedureOutlined,
  DropboxOutlined,
  FileUnknownOutlined,
} from "@ant-design/icons";
import { selectUserName } from "../features/counter/userSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import SimilarProduct from "./similarProduct";
import { current } from "@reduxjs/toolkit";

const { TextArea } = Input;
export interface commentsArr {
  name: string;
  content: string;
  rate: number;
  date: string;
}

const CommentDetail = ({ item }: any) => {
  const [star, setStar] = useState(5);
  const [comment, setComment] = useState("");
  const [page, setPage] = useState(1);
  const [commentsArr, setCommentsArr] = useState<commentsArr[]>([]);
  const userName = useAppSelector(selectUserName);

  const handleComment = () => {
    if (userName && comment) {
      commentsArr.unshift({
        name: userName,
        content: comment,
        rate: star,
        date: new Date().toLocaleString(),
      });
    }
    setCommentsArr([...commentsArr]);
    setComment("");
    setStar(5);
  };
  return (
    <>
      <div className="info-container">
        <div className="detail">
          <h1>
            <AccountBookOutlined />
            Product's Details
          </h1>
          <h2>Type:{item.type}</h2>
          <h3>Feature:{item.detail[0]}</h3>
          <h3>Advertise:{item.detail[1]}</h3>
        </div>
        <div className="detail">
          <h1 style={{ color: "red" }}>
            <DeliveredProcedureOutlined />
            Free Ship for all products at Meta Gaming.
          </h1>
          <h1>
            <DropboxOutlined /> Product's information
          </h1>
          <h3>Description:{item.description}</h3>
          <h3>Noted:{item.information[0]}</h3>
          <h3>Product Information:{item.information[1]}</h3>
        </div>
      </div>

      <SimilarProduct item={item} />
      <div className="info-container">
        <div>
          <strong style={{ fontSize: "1.5rem" }}>Rating:</strong>
          <span>
            <Rate
              allowClear={true}
              value={star}
              onChange={(value) => setStar(value)}
            />
          </span>
          <h2>Comment:</h2>

          <TextArea
            showCount
            maxLength={400}
            style={{ height: 120 }}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleComment}
          >
            Send comment
          </Button>
        </div>
        <div className="comment-container">
          {commentsArr
            ? commentsArr.slice(5 * (page - 1), 5 * page - 1).map((comment) => {
                return (
                  <div className="comment">
                    <img
                      src="/images/game.png"
                      alt="image"
                      style={{ width: 50, height: 50, borderRadius: "50%" }}
                    />
                    <strong>{comment.name}</strong>
                    <Rate
                      value={comment.rate}
                      disabled
                      style={{ marginLeft: 10 }}
                    />
                    <h4>{comment.date}</h4>
                    <h4>{comment.content}</h4>
                    <Button type="primary" danger>
                      Answer
                    </Button>
                  </div>
                );
              })
            : undefined}
          <div className="comment">
            <img
              src="/images/game.png"
              alt="image"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <strong>Joe Biden</strong>
            <Rate value={5} disabled style={{ marginLeft: 10 }} />
            <h4>02-01-2022</h4>
            <h4>This product is wonderful!</h4>
            <Button type="primary" danger>
              Answer
            </Button>
          </div>
          <div className="comment">
            <img
              src="/images/game.png"
              alt="image"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <strong>Donald Trump</strong>
            <Rate value={5} disabled style={{ marginLeft: 10 }} />
            <h4>02-01-2022</h4>
            <h4>This product is wonderful!</h4>
            <Button type="primary" danger>
              Answer
            </Button>
          </div>
          <Pagination
            defaultCurrent={page}
            onChange={(page) => setPage(page)}
            total={50}
          />
        </div>
      </div>
    </>
  );
};

export default CommentDetail;
