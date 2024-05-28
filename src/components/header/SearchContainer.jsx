"use client"
import { headerMenu } from "@/constants/data";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
export default function SearchContainer({
  searchContainer,
  showSearchContainer,
}) {
  return (
    <div
      className={
        searchContainer
          ? "searchContainer showSearchContainer"
          : "searchContainer"
      }
    >
      <div
        className={
          searchContainer ? "searchInput showSearchInput" : "searchInput"
        }
      >
        <CiSearch className={searchContainer ? "inputImage" : ""} />
     
        <input
          type="text"
          placeholder="Search in am.com"
          className={searchContainer ? "showInput" : ""}
        />
        <span
          className={searchContainer ? "close showCloseBtn" : "close"}
          onClick={showSearchContainer}
        >
          <IoCloseOutline size={20}/>
        </span>
      </div>
      <div className="QuickLinkConainer">
        <p
          className={searchContainer ? "title showTitle" : "title"}
          onClick={searchContainer}
        >
          QuickLinks
        </p>
        <div>
          {headerMenu.slice(0,headerMenu.length-1).map((search) => (
            <div
              key={search.id}
              className={
                searchContainer ? "quickLinks showquickLinks" : "quickLinks"
              }
            >
              <Link href="/" className="headeLinks" onClick={showSearchContainer}>
                {search.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
