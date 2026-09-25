import { COMPANY } from "@/config/company";

export function Preloader() {
  return (
    <div className="preloader" data-preloader="" hidden aria-hidden="true">
      <div className="preloader__content">
        <div className="preloader__spinner">
          <span className="preloader__orbit"></span>
          <img className="preloader__mark" src="/assets/favicon/favicon.svg" width="42" height="42" alt="" />
        </div>
        <span className="preloader__brand">
          {COMPANY.shortName}
        </span>
      </div>
    </div>
  );
}
