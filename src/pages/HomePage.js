import React, { useState } from "react";
import { Button, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./HomePage.css"; // Ensure this path is correct

function HomePage() {
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    setShowCategories(true);
  };

  const handleCategoryClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="home-page">
      <Typography variant="h2" className="">
        Welcome to Radiant Path Ministries
      </Typography>
      <Typography variant="h6" paragraph className="fade-in">
        Empowering Yah's people to awaken and achieve success in all areas of
        life.
      </Typography>
      <Button
        variant="contained"
        className="cta-button"
        onClick={handleButtonClick}
        style={{
          background: "linear-gradient(45deg, #b3e5fc, #ffb74d, #4fc3f7);",
          color: "#fff", // Ensure the text is readable
        }}
      >
        Start Your Exploration
      </Button>

      {/* Ensure the category container is separate from the button section */}
      <div className="category-section">
        <div
          className={`category-container ${showCategories ? "show" : "hide"}`}
        >
          <Grid container spacing={2} className="category-grid">
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                className="category-box"
                style={{
                  animationDelay: "0.1s",
                  backgroundImage: `url('/images/hair.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  position: "relative", // Necessary for overlay
                }}
                onClick={() => handleCategoryClick("/hair-care")}
              >
                {/* Semi-transparent overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
                  }}
                ></div>
                {/* Category Title */}
                <Typography
                  variant="h6"
                  style={{
                    position: "relative", // Ensure text is on top of the overlay
                    zIndex: 1, // Make sure the text is above the overlay
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Add text shadow
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  Hair
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper
                className="category-box"
                style={{
                  animationDelay: "0.3s",
                  backgroundImage: `url('/images/foodImage.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  position: "relative",
                }}
                onClick={() => handleCategoryClick("/biblical-diet")}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
                <Typography
                  variant="h6"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  Nutrition
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper
                className="category-box"
                style={{
                  animationDelay: "0.5s",
                  backgroundImage: `url('/images/wealth.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  position: "relative",
                }}
                onClick={() => handleCategoryClick("/biblical-wealth")}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
                <Typography
                  variant="h6"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  Wealth
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper
                className="category-box"
                style={{
                  animationDelay: "0.7s",
                  backgroundImage: `url('/images/merchandise.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  position: "relative",
                }}
                onClick={() => handleCategoryClick("/merchandise")}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
                <Typography
                  variant="h6"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  Merchandise
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
