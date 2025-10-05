export default function ScreenSizeLabel() {
  return (
    <div
      id="wd-screen-size-label"
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        backgroundColor: "black",
        color: "white",
        padding: "8px 12px",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
        zIndex: 1000,
        border: "1px solid #333",
      }}
    >
      <div className="d-block d-sm-none">XS - Extra Small (&lt;576px)</div>
      <div className="d-none d-sm-block d-md-none">S - Small (≥576px)</div>
      <div className="d-none d-md-block d-lg-none">M - Medium (≥768px)</div>
      <div className="d-none d-lg-block d-xl-none">L - Large (≥992px)</div>
      <div className="d-none d-xl-block d-xxl-none">
        XL - Extra Large (≥1200px)
      </div>
      <div className="d-none d-xxl-block">
        XXL - Extra Extra Large (≥1400px)
      </div>
    </div>
  );
}
